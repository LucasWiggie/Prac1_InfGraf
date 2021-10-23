#version 330 core

in vec2 texCoord;
in int gl_PrimitiveID;

out vec4 outColor;

uniform sampler2D colortex;

void main()
{
	float r = texCoord.x;
	float s = texCoord.y;

	if ( pow((r-0.5), 2) + pow((s-0.5), 2) >= 0.2 ){
		discard;
	} else {
		outColor = texture(colortex, texCoord);
	}
}