#version 330 core

out vec4 outColor;

in vec3 norm;

void main()
{
		//como outColor es tama�o vec4 y norm es vec3, convertimos para q tengan el mismo tama�o
		outColor = vec4(norm, 1.0);
}