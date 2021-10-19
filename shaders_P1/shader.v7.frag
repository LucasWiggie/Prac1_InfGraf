#version 330 core

in vec2 texCoord;
//La propia textura, hemos metido la imagen en esta variable:
uniform sampler2D colortex;

out vec4 outColor;

void main()
{
		outColor = texture(colortex, texCoord);
}